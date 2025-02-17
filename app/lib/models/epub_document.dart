import 'dart:io';
import 'package:flutter/foundation.dart';

import 'epub/_chapter_index.dart';
import 'epub/_paragraph.dart';
import 'epub/_parse_result.dart';

class EpubDocument {
  EpubDocument(this.id);

  int id;
  late List<EpubChapter> chapters;
  late List<Paragraph> paragraphs;
  late List<int> chapterIndexes;

  late EpubBook book;

  static Future<EpubDocument> initialize(int id, String path) async {
    final doc = EpubDocument(id);

    final file = File(path);
    final bytes = await file.readAsBytes();

    doc.book = await EpubReader.readBook(bytes);

    doc.chapters = parseChapters(doc.book);
    final parseParagraphsResult = parseParagraphs(doc.chapters, doc.book.Content);
    doc.paragraphs = parseParagraphsResult.flatParagraphs;
    doc.chapterIndexes = (parseParagraphsResult.chapterIndexes);

    if (kDebugMode) {
      print("chapters: ${doc.chapters.length}");
      print("paragraphs: ${doc.paragraphs.length}");
      print("chapterIndexes: ${doc.chapterIndexes.length}");
    }

    return doc;
  }

  ChapterIndex? nextIndex(ChapterIndex index, int abs) {
    // final abs = (absParagraphIndex(index) ?? 0) + 1;

    if (abs == paragraphs.length - 1) {
      return null;
    }

    if (abs < chapterIndexes[index.chapterIndex + 1]) {
      return ChapterIndex(
        // chapter: index.chapter,
        chapterIndex: index.chapterIndex,
        paragraphIndex: index.paragraphIndex + 1,
      );
    } else {
      return ChapterIndex(
        // chapter: index.chapter,
        chapterIndex: index.chapterIndex + 1,
        paragraphIndex: 0,
      );
    }
  }

  String getContent(int abs) {
    return paragraphs[abs].element.innerHtml;
  }

  // String getContent(ChapterIndex? index) {
  //   final abs = absParagraphIndex(index) ?? 0;

  //   return paragraphs[abs].element.innerHtml;
  // }

  String? cfiGenerate(ChapterIndex? index) {
    if (index == null) {
      return null;
    }

    final chapterIndex = index.chapterIndex > chapters.length - 1 ? 0 : index.chapterIndex;
    final chapter = chapters[chapterIndex];
    final paragraphIndex = index.paragraphIndex;

    return chapter.Anchor == null
        ? '/${chapter.ContentFileName}?$paragraphIndex'
        : '/${chapter.ContentFileName}#${chapter.Anchor}?$paragraphIndex';
  }

  ChapterIndex? progressIndexParse(int? combined) {
    final chapterIndex = (combined ?? 0) >> 32;
    final paragraphIndex = (combined ?? 0) & 0xFFFFFFFF;

    return chapters.length > chapterIndex
        ? ChapterIndex(
            // chapter: chapters[chapterIndex],
            chapterIndex: chapterIndex,
            paragraphIndex: paragraphIndex,
          )
        : const ChapterIndex(
            // chapter: null,
            chapterIndex: 0,
            paragraphIndex: 0,
          );
  }

  ChapterIndex? cfiParse(String? cfi) {
    if (cfi == null || !cfi.startsWith('/')) {
      // 处理无效的 CFI 字符串
      return null;
    }

    List<String> parts = cfi.split('?');

    int paragraphIndex = 0;

    if (parts.length == 2) {
      // 解析段落索引
      paragraphIndex = int.tryParse(parts[1]) ?? 0;
    }

    List<String> cparts = parts[0].split('#');
    // 处理带锚点的情况
    final anchor = (cparts.length == 2) ? cparts[1] : null;

    final chapterIndex =
        chapters.indexWhere((chapter) => chapter.ContentFileName == cparts[0].substring(1) && chapter.Anchor == anchor);

    return chapterIndex == -1
        ? ChapterIndex(
            // chapter: null,
            chapterIndex: 0,
            paragraphIndex: paragraphIndex,
          )
        : ChapterIndex(
            // chapter: chapters[chapterIndex],
            chapterIndex: chapterIndex,
            paragraphIndex: paragraphIndex,
          );
  }

  int? absParagraphIndex(ChapterIndex? current) {
    //返回章节索引+ 段落索引
    return current != null ? chapterIndexes[current.chapterIndex] + current.paragraphIndex : null;
  }

  double progress(ChapterIndex? current) {
    final pos = absParagraphIndex(current);

    if (pos == null) {
      return 0;
    }
    if (kDebugMode) {
      print('currentParagraphIndex $pos / ${paragraphs.length} ');
    }
    return pos / paragraphs.length;
  }
}
