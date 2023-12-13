import { BrowserRouter } from "react-router-dom";
import CustomRouter from "./route/router";
import DocumentMeta from 'react-document-meta';



function App() {
  const meta = {
    title: 'Easenode Tech',
    description: 'Seemless Spend Management Tool, Icrease potential of your buisness',
    canonical: 'https://easexpense.com',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'Spend,Management,Tool,Discount,Save,saas,buissness',
        p: 'domain_verify'
      },
      content:"f7b1a36b5384621f3d536cca15952035"
    }
  }
  return (
    <>
      <DocumentMeta {...meta}>
        <BrowserRouter>
          <CustomRouter />
        </BrowserRouter>
      </DocumentMeta>
    </>
  );
}

export default App;
