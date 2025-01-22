"use client";
import { SetState } from "@/types/global.t";
import editorConfig from "@/utils/EditorConfig";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import "ckeditor5/ckeditor5.css";
import { ClassicEditor } from "ckeditor5";
import React from "react";
import "./textEditor.css";
type TextEditor_T = {
  onChange: SetState<string>;
  value: string;
  placeholder:string
};
function TextEditor({ onChange, value,placeholder }: TextEditor_T) {
  return (
    <div className="child:border-none rounded-8">
      <CKEditor
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange(data);
        }}
        editor={ClassicEditor}
        config={{...editorConfig,initialData:value,placeholder}}
      />
    </div>
  );
}

export default TextEditor;
