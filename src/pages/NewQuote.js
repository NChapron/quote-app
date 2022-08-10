import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const history = useHistory();

  const AddQuoteHandler = (quoteData) => {
    history.push("/quotes");
    console.log(quoteData);
  };

  return <QuoteForm onAddQuote={AddQuoteHandler} />;
};

export default NewQuote;
