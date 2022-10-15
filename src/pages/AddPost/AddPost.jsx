import { useState, useMemo, useCallback, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import {
  Box,
  Container,
  Stack,
  Text,
  Flex,
  Input,
  Button,
  Image,
} from '@chakra-ui/react';
import Select from 'react-select';

import { useAddPostMutation } from 'redux/posts/postsApi';
import { useUpdatePostMutation } from 'redux/posts/postsApi';
import { useGetOnePostQuery } from 'redux/posts/postsApi';

import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

const tagsOptions = [
  { value: 'html', label: 'html' },
  { value: 'css', label: 'css' },
  { value: 'javascript', label: 'javascript' },
  { value: 'react', label: 'react' },
  { value: 'vue', label: 'vue' },
  { value: 'angular', label: 'angular' },
  { value: 'nodejs', label: 'nodejs' },
  { value: 'nextjs', label: 'nextjs' },
];

const AddPost = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [image, setImage] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  // const [uploaded, setUploaded] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // const [tags, setTags] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const isEditing = postId ? true : false;
  const { data, isSuccess } = useGetOnePostQuery(postId, {
    refetchOnMountOrArgChange: true,
    skip: !isEditing,
  });
  const [updatePost] = useUpdatePostMutation();
  const [addPost] = useAddPostMutation();

  useEffect(() => {
    if (postId && isSuccess) {
      setTitle(data?.posts?.title);
      setDescription(data?.posts?.description);
      setImgUrl(data?.posts?.imgUrl);
    }
  }, [
    data?.posts?.description,
    data?.posts?.imgUrl,
    data?.posts?.title,
    isSuccess,
    postId,
  ]);

  const options = useMemo(
    () => ({
      spellChecker: false,
      maxHeight: '400px',
      autofocus: true,
      placeholder: 'Введите текст...',
      status: false,
    }),
    []
  );

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'title':
        return setTitle(value);
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

    console.log(fileMeta);

    const instance = axios.create();
    delete instance.defaults.headers.common['Authorization'];

    const { data } = await instance.post(
      'https://api.cloudinary.com/v1_1/defbgb7dw/image/upload',
      fileMeta
    );

    setImgUrl(data.secure_url);
    setImage('');
  };

  const deleteUploadedimage = () => {
    setImgUrl('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    const tags = [];
    for (const option of selectedOption) {
      tags.push(option.value);
    }

    const post = {
      title,
      tags,
      description,
      imgUrl,
    };

    if (isEditing) {
      updatePost({ postId, post });
      navigate(`/posts/${postId}`);
    } else {
      addPost(post);
      navigate(`/`);
    }
  };

  return (
    <Box>
      <Container as={Stack} maxW={'4xl'} py={4} direction="column" spacing={4}>
        <Flex>
          <Input
            type="file"
            display="none"
            id="file-upload"
            onChange={e => setImage(e.target.files[0])}
          />
          <Box
            as="label"
            htmlFor="file-upload"
            cursor="pointer"
            px={5}
            py={2}
            bg="pink.400"
            color="white"
            borderRadius="6px"
            marginRight="12px"
            display={!imgUrl ? 'block' : 'none'}
          >
            <Text fontSize="md" as="b">
              Select image
            </Text>
          </Box>
          <Button onClick={uploadImage} display={!imgUrl ? 'block' : 'none'}>
            Upload image
          </Button>
          <Button
            onClick={deleteUploadedimage}
            display={imgUrl ? 'block' : 'none'}
          >
            Delete image
          </Button>
        </Flex>
        <Box display={image ? 'block' : 'none'}>
          <Text fontSize="md">{image.name}</Text>
        </Box>
        {imgUrl && (
          <Box width="100%" zIndex="2">
            <Image
              borderRadius="lg"
              src={imgUrl}
              alt="Uploaded"
              objectFit="cover"
              width="100%"
              height="500px"
            />
          </Box>
        )}
        <Input
          variant="flushed"
          placeholder="Article title..."
          name="title"
          value={title}
          onChange={handleChange}
        />
        <Select
          isMulti
          name="tags"
          value={selectedOption}
          onChange={setSelectedOption}
          options={tagsOptions}
          className="basic-multi-select"
          classNamePrefix="select"
        />
        <SimpleMDE
          value={description}
          onChange={handleChangeMde}
          options={options}
        />
        <Stack direction="row" spacing={4}>
          <Button colorScheme="pink" variant="solid" onClick={handleSubmit}>
            Publish
          </Button>
          <Button colorScheme="blue" variant="outline">
            Cansel
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default AddPost;
