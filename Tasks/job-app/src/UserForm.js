import React,{useState} from 'react'

const UserForm = (props) => {
    const title = ['Front-End Developer' , 'Node.js Developer' , 'MEAN Stack Developer', 'FULL Stack Developer' ]
    const {handleFormSubmit} = props
    const [name , setName] = useState('')
    const [email, setEmail]= useState('')
    const [phone, setPhone]= useState('')
    const [skills,setSkills]= useState('')
    const [jobTitle,setJobTitle] = useState('')
    const [experience,setExperience] = useState('')

    const handleName = (e)=>{
        setName(e.target.value)
    }
    const handleEmail = (e)=>{
        setEmail(e.target.value)
    }
    const handlePhone = (e)=>{
        setPhone(e.target.value)
    }
    const handleJobTle = (e)=>{
        setJobTitle(e.target.value)
    }
    const handleExp = (e) =>{
        setExperience(e.target.value)
    }
    const handleSkills = (e)=>{
        setSkills(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData = {
            name : name,
            email: email,
            phone:phone,
            skills:skills,
            jobTitle:jobTitle,
            experience:experience
        }
        handleFormSubmit(formData);
        setName('')
        setEmail('')
        setPhone('')
        setSkills('')
        setJobTitle('')
        setExperience('')
        
    }
    return (
        <div>
            <h1>Apply for Job</h1>
            <form onSubmit={handleSubmit}>
                <label>Full Name</label> <input type='text' value={name} onChange={handleName}/><br />
                <label>Email address</label> <input type='text' value={email} onChange={handleEmail} placeholder='example@email.com'/><br />
                <label>Contact Number</label> <input type='text' value={phone} onChange={handlePhone} placeholder='+91 9944499555'/><br />
                <label>Applying for jobs</label><select value={jobTitle} onChange={handleJobTle}>
                    <option value=''>-----select-----</option>
                {
                    title.map((ele,i)=>{
                    return <option key={i} value={ele}>{ele}</option>
                    })
                }
                </select> <br />
                <label>Experience</label> <input type='text' value={experience} onChange={handleExp} placeholder='experience (2 yerars , 3 months'/><br />
                <label>Technical Skills</label> <textarea value={skills} onChange={handleSkills} placeholder='Technical Skills'></textarea> <br />
                <input type='submit' value='Send Application'/>
            </form>
        </div>
    )
}

export default UserForm