import PROPERTY from '../models/property.js';

export const getProperties = async (req, res) => {
    try{
        const properties = await PROPERTY.find();
        return res.status(200).json(properties);
    }
    catch(err){
        console.log(err);
        return res.status(500).json({error: err});
    }
}

export const getData = async (req, res) => {
    try{
        const { _id } = req.body;
        const property = await PROPERTY.findById(_id);
        console.log(property);
        console.log("+++++++++++++++++++++");
        return res.status(200).json(property);

    }
    catch(err){
        console.log(err);
        return res.status(500).json({error: err});
    }
}

// export const getPosts = async (req, res) => {
//     try {
//         const posts = await POST.find();
//         return res.status(200).json(posts);
//     }
//     catch(err){
//         console.log(err);
//         return res.status(500).json({error: err});
//     }
// }