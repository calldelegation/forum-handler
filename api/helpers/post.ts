import { VercelRequest, VercelResponse } from '@vercel/node';

export default (req: VercelRequest, res: VercelResponse) => {
    // Handle the 'post' event here...
    console.log("Incoming post!", req)
    // Check MongoDB to see if it exists or not

    // Pack the information to send to notion

    return res.status(200).send({error: 'Post event type'});
};
