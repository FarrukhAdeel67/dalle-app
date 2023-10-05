
  import * as dotenv from 'dotenv';
  import { OpenAI  } from 'openai';
  
  dotenv.config();
  
  
 



const generate = async (req, res) => {
    try {
        const { prompt } = req.body;
    
        const aiResponse = await openai.createImage({
          prompt,
          n: 1,
          size: '1024x1024',
          response_format: 'b64_json',
        });
    
        console.log(aiResponse)
        const image = aiResponse.data.data[0].b64_json;
        res.status(200).json({ photo: image });
     
 
          
        

      } catch (error) {
        console.error(error);
        res.status(500).send( { error: "Internal server error" });
      }

};

export const dalleController = {

    generate,
};