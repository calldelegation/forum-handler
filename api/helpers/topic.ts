import { VercelRequest, VercelResponse } from '@vercel/node';

export default (req: VercelRequest, res: VercelResponse) => {
    // Handle the 'post' event here...
    console.log("Incoming topic!", req)
    // Check MongoDB to see if it exists or not

    // Create ticket inside notion and grab notion id
    // Assign to Harry or Andres
    // Create db entry for notion id <> forum id
    return res.status(200).send({error: 'Topic event type'});
};
