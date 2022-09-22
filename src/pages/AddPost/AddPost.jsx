import { useState, useMemo, useCallback } from 'react';
import axios from 'axios';

import { useAddPostMutation } from 'redux/posts/postsApi';

import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import style from './AddPost.module.css';

const AddPost = () => {
  const [image, setImage] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [uploaded, setUploaded] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [addPost] = useAddPostMutation();

  const options = useMemo(
    () => ({
      spellChecker: false,
      maxHeight: '400px',
      autofocus: true,
      placeholder: 'Введите текст...',
      status: false,
      // autosave: {
      //     enabled: true,
      //     delay: 1000,
      // },
    }),
    []
  );

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'title':
        return setTitle(value);
      case 'tags':
        return setTags(value);
      default:
        return;
    }
  };

  const handleChangeMde = useCallback(value => {
    setDescription(value);
  }, []);

  const uploadImage = async e => {
    e.preventDefault();

    const fileMeta = new FormData();
    fileMeta.append('file', image);
    fileMeta.append('upload_preset', 'post-img');

    const instance = axios.create();
    delete instance.defaults.headers.common['Authorization'];

    const { data } = await instance.post(
      'https://api.cloudinary.com/v1_1/defbgb7dw/image/upload',
      fileMeta
    );

    setImgUrl(data.secure_url);
    setUploaded(true);
  };

  const deleteUploadedimage = () => {
    setUploaded(false);
    setImgUrl('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    const post = {
      title,
      tags: tags.split(' '),
      description,
      imgUrl,
    };

    addPost(post);
  };

  return (
    <Container maxWidth="xl">
      <Paper style={{ padding: 30, marginTop: 15 }}>
        <div
          className={style.uploadWrapper}
          style={{ display: uploaded ? 'none' : 'flex' }}
        >
          <input
            type="file"
            onChange={e => setImage(e.target.files[0])}
          ></input>
          <Button variant="outlined" size="large" onClick={uploadImage}>
            Загрузить
          </Button>
        </div>

        {imgUrl && (
          <div
            className={style.uploadImage}
            style={{ display: !uploaded ? 'none' : 'flex' }}
          >
            <img src={imgUrl} alt="Uploaded" className={style.image} />
            <button onClick={deleteUploadedimage} className={style.delete}>
              <DeleteIcon />
            </button>
          </div>
        )}

        <TextField
          name="title"
          value={title}
          onChange={handleChange}
          className={style.title}
          variant="standard"
          placeholder="Заголовок статьи..."
          fullWidth
        />
        <TextField
          value={tags}
          name="tags"
          onChange={handleChange}
          className={style.tags}
          variant="standard"
          placeholder="Тэги"
          fullWidth
        />
        <SimpleMDE
          className={style.editor}
          value={description}
          onChange={handleChangeMde}
          options={options}
        />
        <div className={style.buttons}>
          <Button size="large" variant="contained" onClick={handleSubmit}>
            {/* {isEditing ? 'Сохранить' : 'Опубликовать'} */}
            Опубликовать
          </Button>
          <a href="/">
            <Button size="large">Отмена</Button>
          </a>
        </div>
      </Paper>
    </Container>
  );
};

export default AddPost;
