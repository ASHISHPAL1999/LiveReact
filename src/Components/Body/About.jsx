import React,{useState} from 'react'

export default function About() {

    const [state, setstate] = useState({
        "imgsrc":"https://th.bing.com/th/id/R782adc2b6062ab00461359da5b02b753?rik=Y%2fJZM98TPsfXxA&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fProfile-PNG-File.png&ehk=nJ0Yls4aiMdSvREO5hB2GU7Hc3cL04UQeojwLhvL8Gk%3d&risl=&pid=ImgRaw"
    })
    const fileHandler=(e)=>{
        
        let files=e.target.files;
        let reader =new FileReader();
        reader.readAsDataURL(files[0])
        reader.onload=(e)=>{
            console.log(e.target.result)
            setstate({
                "imgsrc":e.target.result
            })
            
        }
        console.log(e.target.files)
    }
    return (
        <div>
            <h1>About</h1><img  src={state.imgsrc} width="15%" height="15%"></img>
            <input type="file" name="imgsrc" name="file" onChange={fileHandler}></input>
        </div>
    )
}
