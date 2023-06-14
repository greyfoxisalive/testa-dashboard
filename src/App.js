import {useState} from 'react';
import './index.css';
import Editor from '@monaco-editor/react';

function App() {
  const [fileName, setFileName] = useState('script.js');

  const file = files[fileName];

  return (
    <>
      <button disabled={fileName === 'script.js'} onClick={() => setFileName('script.js')}>
        script.js
      </button>
      <button disabled={fileName === 'style.css'} onClick={() => setFileName('style.css')}>
        style.css
      </button>
      <button disabled={fileName === 'index.html'} onClick={() => setFileName('index.html')}>
        index.html
      </button>
      <Editor
        height="80vh"
        theme="vs-light"
        path={file.name}
        defaultLanguage={file.language}
        defaultValue={file.value}
      />
    </>
  );
}


export default App;


const files = {
  'script.js': {
    name: 'script.js',
    language: 'javascript',
    value: "nigga",
  },
  'style.css': {
    name: 'style.css',
    language: 'css',
    value: "bigga",
  },
  'index.html': {
    name: 'index.html',
    language: 'html',
    value: "zigga",
  },
};
