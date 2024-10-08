import './App.css';
import {QRCodeCanvas} from 'qrcode.react';

const question = [
  {
    "id": "1",
    "questionText": "React JS is developed by?",
    "options": [
      {
        "id": "a8222953-e043-4873-abee-bc5dae13ee51",
        "text": "Facebook",
        "isCorrect": "true"
      },
      {
        "id": "0d5470e9-915e-400f-b495-930291046216",
        "text": "Twitter",
        "isCorrect": "false"
      },
      {
        "id": "e0a41ff1-20a7-4f01-b1da-9024a866ce58",
        "text": "Microsoft",
        "isCorrect": "false"
      },
      {
        "id": "3883c078-d654-4873-ae61-538998324a3f",
        "text": "Google",
        "isCorrect": "false"
      }
    ]
  },
  {
    "id": "2",
    "questionText": "Which of the following is used to initialize the state in React class component?",
    "options": [
      {
        "id": "784065c5-87be-4d2f-8218-ef974a6b6aba",
        "text": "constructor",
        "isCorrect": "true"
      },
      {
        "id": "c57e6bc3-0e10-4132-859b-77afdaa34ed2",
        "text": "None of the given options",
        "isCorrect": "false"
      },
      {
        "id": "26429cff-8de0-4810-8d86-510d5bd5f6cc",
        "text": "componentDidMount",
        "isCorrect": "false"
      },
      {
        "id": "f9f95dca-51b9-49f0-bf64-167262e23a35",
        "text": "render",
        "isCorrect": "false"
      }
    ]
  },
  {
    "id": "3",
    "questionText": "Which of the following is a component life cycle phase in React JS?",
    "options": [
      {
        "id": "e6ddc0f2-d0fe-4c52-8ab5-a3882f6ccb90",
        "text": "Mounting",
        "isCorrect": "false"
      },
      {
        "id": "d3b765ac-e5e5-4b21-95a3-bc0e29043b97",
        "text": "Updating",
        "isCorrect": "false"
      },
      {
        "id": "14b262e6-e41e-4a37-8f36-7f40231f7941",
        "text": "Unmounting",
        "isCorrect": "false"
      },
      {
        "id": "5250cd59-a86b-4303-9c9f-5f5c27d71f13",
        "text": "All of the above",
        "isCorrect": "true"
      }
    ]
  },
  {
    "id": "4",
    "questionText": "Which of the following are the CSS Flexbox properties?",
    "options": [
      {
        "id": "5337b15d-6a74-4b20-a5f8-e318bf2999b1",
        "text": "margin",
        "isCorrect": "false"
      },
      {
        "id": "2b48b0ae-6a9d-4575-92df-78d19ede2e8c",
        "text": "align-items",
        "isCorrect": "true"
      },
      {
        "id": "bda86250-1551-4ba5-a01c-10bae5659455",
        "text": "height and width",
        "isCorrect": "false"
      },
      {
        "id": "74498884-ad1f-4af9-a7d8-cb3dbd09cd8d",
        "text": "padding",
        "isCorrect": "false"
      }
    ]
  },
  {
    "id": "5",
    "questionText": "Which of the following are the ways to style the React Component?",
    "options": [
      {
        "id": "274f9472-76a0-4801-844c-1b14fa4b3809",
        "text": "CSS Stylesheet",
        "isCorrect": "false"
      },
      {
        "id": "1cd7f117-075c-48e2-a292-acc34a480bcd",
        "text": "Styled Components",
        "isCorrect": "false"
      },
      {
        "id": "9159babc-efb3-4ebe-a475-83ba19f7d97c",
        "text": "Inline Styling",
        "isCorrect": "false"
      },
      {
        "id": "24585089-83be-4a69-a0a8-e2bd79a04f67",
        "text": "All of the above",
        "isCorrect": "true"
      }
    ]
  }
]


function App() {
  return (
    <div className="App">
      <p className="heading">Generate QR Code:</p>
      <QRCodeCanvas value="https://quiz-project-swart.vercel.app/" size={200} />
      <br />
      <div className="question-container">
        {
          question.map((eachQuestion, index) => (
            <p className="question"><span>{index + 1}.</span> {eachQuestion.questionText}</p>
          ))
        }
        </div>
    </div>
  );
}

export default App;
