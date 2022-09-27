import style from './CommentsForm.module.css';

const CommentsForm = () => {
  return (
    <div className={style.formWrapper}>
      <form>
        <textarea />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CommentsForm;
