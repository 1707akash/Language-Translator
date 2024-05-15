import React, { useState } from "react";
import axios from 'axios'
import { Langs } from "./Langs";
import SelectLang from "./SelectLang";

const Board = () => {
  const [sourceLanguage, setSourceLanguage] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("");
  const[enteredText, setEnteredText] = useState("");
  const[answerText, setAnswerText] = useState("");


  const fetchNewText = async ()=>{
    const url = "https://text-translator2.p.rapidapi.com/translate";
    const apiKey = "26fec1c686mshef65bb3b9cdf379p1ebed5jsn21d763a2af41";

    const headers ={
        "content-type":"application/x-www-form-urlencoded",
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host":"text-translator2.p.rapidapi.com"
    }

    const data = {
        "source_language": sourceLanguage,
        "target_language": targetLanguage,
        "text": enteredText
    }

    try{
        const response = await axios.post(url, data, {headers});
        const result = response.data;
        // console.log(result.status);
        // console.log(result.data.translatedText);
        if(result.status === 'success'){
            const translatedText = result.data.translatedText;
            setAnswerText(translatedText)
        }
    }
    catch(err){
        console.log(err);
    }


  }




  return (
    <div className="board">
      <h1>Language Translator</h1>

      <SelectLang label={"Source Language"} langData={Langs} onChange={setSourceLanguage} />
      <br />

      <SelectLang label={"Target Language"} langData={Langs} onChange={setTargetLanguage} />

      <label htmlFor="inputText">Input Text</label>
      <textarea name="inputText" id="inputText" value={enteredText} onChange={(e)=>setEnteredText(e.target.value)} ></textarea>

      <p className="generatedText">{answerText.length>0 &&  answerText}</p>

      <button onClick={fetchNewText} >Translate Text</button>
    </div>
  );
};

export default Board;
