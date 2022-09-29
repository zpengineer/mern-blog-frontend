import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { useAddCommentMutation } from 'redux/comments/commentsApi';

import style from './CommentsForm.module.css';

const CommentsForm = () => {
  const [content, setContent] = useState('');
  const { postId } = useParams();
  const [comment] = useAddCommentMutation();

  const handleSubmit = e => {
    e.preventDefault();

    comment({ content, postId });
  };

  return (
    <div className={style.wrapper}>
      <form className={style.form} onSubmit={handleSubmit}>
        <textarea
          placeholder="Type your message here..."
          rows="5"
          value={content}
          onChange={e => setContent(e.currentTarget.value)}
          className={style.textarea}
        ></textarea>
        <Stack spacing={2} direction="row" sx={{ marginBottom: '36px' }}>
          <Button variant="contained" type="submit">
            Submit
          </Button>
          <Button variant="outlined">Cancel</Button>
        </Stack>
      </form>
    </div>
  );
};

export default CommentsForm;
