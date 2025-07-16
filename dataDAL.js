import supabase from "./db.js"



export const checkUser = async (req, res) => {
    const { username, password } = req.body
    try {
        const { data: user, error: err } = await supabase.from('users')
            .select('*')
            .eq("username", username)
            .eq("password", password)
        console.log('data', user);

        if (err) {
            return res.status(500).send("erorr databese")
        }
        if (user.length > 0) {
            // return res.send("Login successful")
            try {
                const { data: productsData, error: productsError } = await supabase.from('pruoducts')
                    .select('*')
                console.log(productsData);
                return res.json(productsData)
            }
            catch (err) {
                console.log('etorr:' + err);
                res.status(500).send("eorr in databese products")
            }
        }
        else {
            return res.status(401).send("Wrong username or password")
        }
    }
    catch (err) {
        console.log('etorr:' + err);
        res.status(500).send("eorr in server")
    }
}


