const express = require('express');
const router = express.Router();

require('../db/conn');
const User = require('../model/userSchema');

router.get('/', (req, res,) => {
	res.send('Hello world from the server router js');
});

// using promises/////////////////

// router.post('/register', (req, res) => {
// 	const { name, email, phone, work, password, cpassword } = req.body;
// 	if (!name || !email || !phone || !work || !password || !cpassword) {
// 		return res.status(422).json({ error: 'Please fill the field properly' });
// 	}

// 	User.findOne({ email: email })
// 		.then((userExists) => {
// 			if (userExists) {
// 				return res.status(422).json({ error: 'Email already exists' });
// 			}
// 			const user = new User({ name, email, phone, work, password, cpassword });

// 			user.save().then((data) => {
// 				res.status(201).json({ data, message: 'user registered successfully' });
// 			}).catch((err) => res.status(500).json({ error: 'Failed to register' }));

// 		}).catch(err => { console.log(err); });
// });



// using Async await//////////////////////////////////
router.post('/register', async (req, res) => {
		const { name, email, phone, work, password, cpassword } = req.body;
		if (!name || !email || !phone || !work || !password || !cpassword) {
			return res.status(422).json({ error: 'Please fill the field properly' });
		}
		try {
		const userExists = await User.findOne({ email: email });
		if (userExists) {
			return res.status(422).json({ error: 'Email already exists' });
		}

		const user = new User({ name, email, phone, work, password, cpassword });
        await user.save();
res.status(201).json({ message: 'user registered successfully' });



		} catch(err) {
			console.log(err);
		}
	
		
	});
module.exports = router;