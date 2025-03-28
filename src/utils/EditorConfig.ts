import {
  AccessibilityHelp,
  Autoformat,
  AutoImage,
  AutoMediaEmbed,
  Autosave,
  BalloonToolbar,
  BlockQuote,
  Bold,
  CodeBlock,
  Heading,
  ImageBlock,
  ImageCaption,
  ImageInline,
  ImageInsert,
  ImageInsertViaUrl,
  ImageResize,
  ImageStyle,
  ImageTextAlternative,
  ImageToolbar,
  ImageUpload,
  Indent,
  IndentBlock,
  Italic,
  Link,
  LinkImage,
  List,
  ListProperties,
  MediaEmbed,
  Paragraph,
  PasteFromOffice,
  PictureEditing,
  SelectAll,
  Table,
  TableCaption,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar,
  TextTransformation,
  Underline,
  Undo,
} from "ckeditor5";
const editorConfig: any = {
  toolbar: {
    items: [
      "undo",
      "redo",
      "|",
      "heading",
      "|",
      "bold",
      "italic",
      "underline",
      "codeBlock",
      "|",
      "link",
      "insertImage",
      "mediaEmbed",
      "insertTable",
      "blockQuote",
      "|",
      "bulletedList",
      "numberedList",
      "outdent",
      "indent",
    ],
    shouldNotGroupWhenFull: false,
  },
  plugins: [
    AccessibilityHelp,
    Autoformat,
    AutoImage,
    Autosave,
    BalloonToolbar,
    BlockQuote,
    Bold,
    Heading,
    ImageBlock,
    ImageCaption,
    ImageInline,
    ImageInsert,
    ImageInsertViaUrl,
    ImageResize,
    ImageStyle,
    ImageTextAlternative,
    ImageToolbar,
    ImageUpload,
    AutoMediaEmbed,
    CodeBlock,
    Indent,
    IndentBlock,
    Italic,
    Link,
    LinkImage,
    List,
    ListProperties,
    MediaEmbed,
    Paragraph,
    PasteFromOffice,
    PictureEditing,
    SelectAll,
    Table,
    TableCaption,
    TableCellProperties,
    TableColumnResize,
    TableProperties,
    TableToolbar,
    TextTransformation,
    Underline,
    Undo,
  ],
  language: "fa",
  balloonToolbar: [
    "aiAssistant",
    "|",
    "bold",
    "italic",
    "|",
    "link",
    "codeBlock",
    "insertImage",
    "|",
    "bulletedList",
    "numberedList",
  ],

  heading: {
    options: [
      {
        model: "paragraph",
        title: "Paragraph",
        class: "lg:text-bodyB3Regular text-bodyB4Regular text-natural-black",
      },
      {
        model: "heading1",
        view: "h1",
        title: "Heading 1",
        class: "lg:text-h1Semi sm:text-h2Semi text-h3Semi font-YekanBold   leading-tight text-natural-black",
      },
      {
        model: "heading2",
        view: "h2",
        title: "Heading 2",
        class: "lg:text-h2Semi  sm:text-h3Semi text-h4semi text-natural-black",
      },
      {
        model: "heading3",
        view: "h3",
        title: "Heading 3",
        class: "lg:text-h3Semi  sm:text-h4Semi text-hB5semi text-natural-black",
      },
    ],
  },
  image: {
    toolbar: ["imageTextAlternative", "imageStyle:full", "imageStyle:side"],
    styles: {
        options: [
           "full","side",
         { class:"rounded-8 w-full !relative"}
        ]
    }
  },
  link: {
    addTargetToExternalLinks: true,
    defaultProtocol: "https://",
    decorators: {
      toggleDownloadable: {
        mode: "manual",
        label: "Downloadable",
        attributes: {
          download: "file",
        },
      },
    },
  },
  list: {
    properties: {
      styles: true,
      startIndex: true,
      reversed: true,
    },
  },
  mediaEmbed: {
    previewsInData: true,
    // providers: [
    //   {
    //     name: "custom",
    //     url: /^(https:\/\/tech\.sabzlearn\.ir\/uploads\/.+\.mp4)(\?.*)?$/,
    //     html: (match: string) => {
    //       const url = match[1];
    //       return `<video controls style="max-width: 100%; height: auto;">
    //               <source src="${url}" type="video/mp4">
    //               Your browser does not support the video tag.
    //             </video>`;
    //     },
    //   },
    // ],
  },
  table: {
    contentToolbar: [
      "tableColumn",
      "tableRow",
      "mergeTableCells",
      "tableProperties",
      "tableCellProperties",
    ],
  },
};
export default editorConfig;
