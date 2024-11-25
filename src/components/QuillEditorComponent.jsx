import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });

const QuillEditorComponent = ({ value, onChange, className = '' }) => {
  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3,4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      [{ align: [] }],
      [
        {
          color: [
            '#000000', // black
            '#FFFFFF', // white
            '#FF0000', // red
            '#A9A9A9', // dark gray
            '#808080', // gray
            '#0000FF', // blue
            '#FFFF00', // yellow
            '#008000', // green
            '#FFA500', // orange
            '#800080', // purple
            '#00FFFF', // cyan
            '#3A3A3A',//dark gray
          ],
        },
      ],
      ['code-block'],
      ['clean'],
    ],
  };

  const quillFormats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
    'align',
    'color',
    'code-block',
  ];

  return (
    <QuillEditor
      value={value}
      onChange={onChange}
      modules={quillModules}
      formats={quillFormats}
      className={className}
    />
  );
};

export default QuillEditorComponent;
