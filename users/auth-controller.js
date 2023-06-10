import * as usersDao from "./users-dao.js";

const AuthController = (app) => {

 const register = (req, res) => {
    const username = req.body.username;
    const user = usersDao.findUserByUsername(username);

    if (user) {
      res.sendStatus(409);
      return;
    }
    const newUser = usersDao.createUser(req.body);
    req.session["currentUser"] = newUser;
    res.json(newUser);
  };

const login = (req, res) => {
   const username = req.body.username;
   const password = req.body.password;
   const user = usersDao.findUserByCredentials(username, password);
   if (user) {
     req.session["currentUser"] = user;
     res.json(user);
   } else {
     res.sendStatus(404);
   }
 };

  const profile = (req, res) => {
    const currentUser = req.session["currentUser"];

    if (!currentUser) {
      res.sendStatus(404);
      return;
    }
    res.json(currentUser);
  };


 const logout = async (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  };

 const update = (req, res) => {

   const currentUser = req.session["currentUser"];
   if (!currentUser) {
     res.sendStatus(404);
     return;
   }
   // Get the updated profile data from the request body
   const updatedProfile = req.body;
   console.log(updatedProfile)
   console.log(currentUser._id)
   // Update the currentUser with the updatedProfile data
   const result = usersDao.updateUser(currentUser._id, updatedProfile);

     if (result.status === 'ok') {
       res.sendStatus(200);
     } else {
       res.sendStatus(500); // or appropriate error status
     }

   // Send a success response

 };


 app.post("/api/users/register", register);
 app.post("/api/users/login",    login);
 app.post("/api/users/profile",  profile);
 app.post("/api/users/logout",   logout);
 app.put ("/api/users",   update);
};
export default AuthController;

