"use client";
import { SetState } from "@/types/global.t";
import { Editor } from '@tinymce/tinymce-react';
type TextEditor_T = {
  onChange: SetState<string>;
  value: string;
  placeholder: string;
};
function TextEditor({ onChange, value, placeholder }: TextEditor_T) {
  return (
    <div className="child:border-none rounded-8">
      <Editor
        onChange={(event, editor) => {
          const data = editor.getContent();
          onChange(data);
        }}
        apiKey={process.env.NEXT_PUBLIC_TINYMCE}
        initialValue={value}
        
        init={{
          directionality:"rtl",
          placeholder: placeholder,
          menubar: false,
          toolbar: 'undo redo | blocks | ' +
          'bold italic forecolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat ',
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'wordcount'
          ],
          content_style: `
          body {
            font-family: 'YekanBakh', sans-serif;
            color: #000;
            line-height: 1.75;
          }
          p {
            margin-bottom: 1rem;
          }
          h1 {
            font-size: 2rem;
            font-weight: 700;
            line-height: 1.2;
            color: #000;
          }
          h2 {
            font-size: 1.5rem;
            font-weight: 600;
            color: #000;
          }
          h3 {
            font-size: 1.25rem;
            font-weight: 600;
            color: #000;
          }
          img {
            border-radius: 8px;
            width: 100%;
            height: auto;
          }
        `,
        }}
        
      />
    </div>
  );
}

export default TextEditor;
