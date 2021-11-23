import React , {useState, useRef}from 'react';
import { Typography, TextField, Button} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { mergeClasses } from '@material-ui/styles';
import useStyles from './styles';
import { commentPost } from '../actions/auth';
import Results from './Results';

const Comments = ({ props }) => {
  
   const classes = useStyles ();
   const [comments, setComments] = useState(props?.comments);
   const [comment, setComment] = useState('');
   const user = JSON.parse(localStorage.getItem('profile'));
   const dispatch= useDispatch();
   
   const handleClick = async () =>{
        const finalComment = `${user.result.name}: ${comment}`

        const newComments = await dispatch(commentPost(`${user?.result?.name}: ${comment}`));

        setComments(newComments);
        setComment('');
   };
 
   return (
       <div>
       <div className={classes.commentsOuterContainer}>
           <div className={classes.commentsInnerContainer}>
               <Typography gutterBottom variant="h6"> Comments </Typography>
               {comments?.map((c,i) => (
                   <Typography key={i} gutterBottom variant = "subtitle1">
                       {c}
                   </Typography>
               ))}
           </div>
           {user?.result?.name && (
               <div style={{ width: '70%'}}>
               <Typography gutterBottom variant="h6"> Write a Comment </Typography>
               <TextField
                   fullWidth
                   rows={4}
                   variant="outlined"
                   label = "Comment"
                   multiline
                   value= {comment}
                   onChange={(e) => setComment(e.target.value)}
                   />
                   <Button style={{marginTop: '10px'}} fullwidth disabled = {!comment} variant = "contained" color= "primary" onClick={handleClick}>
                       Comment
                   </Button>
               </div>
           )}
           </div>
       </div>
   )
}
 
export default Comments