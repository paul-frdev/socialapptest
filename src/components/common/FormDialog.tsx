import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useGlobalState } from '../../globalState';
import { TextareaAutosize } from '@mui/material';
import { useForm, Resolver } from 'react-hook-form';
import { ChangeEvent } from 'react';
import { useCreateNewPost } from '../posts/hooks/useCreateNewPost';


type FormValues = {
  preventDefault();
  title: string;
  textArea: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.title ? values : {},
    errors: !values.title
      ? {
        title: {
          type: 'required',
          message: 'This is required.',
        },
      }
      : {},
  };
};

export const FormDialog = () => {
  const [openFormDialog, setOpenFormDialog] = useGlobalState('openFormDialog');
  const [formValues, setFormValues] = useGlobalState('newFormValues');
  const { mutate } = useCreateNewPost()

  // console.log('formValues', formValues);

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });

  const submitHandler = (e: any) => {
    e.preventDefault();
    mutate({
      id: 1,
      userId: 1,
      title: formValues.title,
      body: formValues.body
    })
    setOpenFormDialog(false);
  };
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <>
      <Dialog
        className='form-dialog'
        open={openFormDialog}
        onClose={submitHandler}
      >
        <DialogTitle>Add a new post</DialogTitle>
        <form onSubmit={onSubmit}>
          <DialogContent className='form-dialog__content'>
            <TextField
              {...register('title')}
              className='form-dialog--title'
              autoFocus
              name='title'
              margin="dense"
              id="title"
              label="title"
              type="text"
              fullWidth
              variant="standard"
              value={formValues.title}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                const title = event.target.value;
                setFormValues({ ...formValues, title })
              }}
            />
            {errors?.title && <p>{errors.title.message}</p>}
            <TextareaAutosize
              className='textarea'
              value={formValues.body}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                const body = event.target.value;
                setFormValues({ ...formValues, body })
              }}
            />
          </DialogContent>
          <DialogActions className='form-dialog--btns'>
            <Button
              variant="outlined"
              onClick={() => setOpenFormDialog(false)}
            >
              Cancel
            </Button>
            <Button
              variant="outlined"
              onClick={submitHandler}
            >
              Add new post
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}