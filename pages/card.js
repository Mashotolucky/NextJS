import React from 'react'





    function Card() {
        function Profile() {
            const [data, setData] = useState(null)
            const [isLoading, setLoading] = useState(false)
        
            useEffect(async () => {
                setLoading(true)
                
                const res = await fetch("https://jsonplaceholder.typicode.com/users");
                const posts = await res.json();
                console.log(posts)
                setData(posts);
        
                setLoading(false);
        
            }, []);

        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col col-3 mt-4">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Title</h4>
                                    <p className="card-text">Text</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        )
    }

    export default Card