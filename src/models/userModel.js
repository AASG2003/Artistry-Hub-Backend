// // models/userModel.js
// import {db} from "../config/db.js"

// const User = {
//     getAllUsers: (callback) => {
//         const query = 'SELECT * FROM usuarios';
//         db.query(query, (err, results) => {
//             if (err) {
//                 return callback(err);
//             }
//             callback(null, results);
//         });
//     },
//     getUserById: (id, callback) => {
//         const query = 'SELECT * FROM usuarios WHERE id = ?';
//         db.query(query, [id], (err, results) => {
//             if (err) {
//                 return callback(err);
//             }
//             callback(null, results[0]);
//         });
//     },
// };

// export default User
