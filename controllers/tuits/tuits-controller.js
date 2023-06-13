import * as tuitsDao from './tuits-dao.js'



const createTuit = async (req, res) => {
  const newTuit = req.body;

  newTuit.likes = 0;
  newTuit.liked = false;
  /*newTuit.topic = "Space";
      newTuit.username = "Nasa";
      newTuit.handle = "@nasa";
      newTuit.time = "0s";
      newTuit.image = "nasa.png";
      newTuit.tuit = "Nasa's Mission";
      newTuit.replies = 0;
      newTuit.retuits = 0;*/

      const insertedTuit = await tuitsDao.createTuit(newTuit);
        res.json(insertedTuit);

}
const findTuits  = async (req, res) => {
const tuits = await tuitsDao.findTuits()
res.json(tuits);
}
const updateTuit = async (req, res) => {
  const tuitdId = req.params.tid;
  const updates = req.body;
  const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates);

  res.sendStatus(status);
}

const deleteTuit = async (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
  res.json(status);
}

export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}

