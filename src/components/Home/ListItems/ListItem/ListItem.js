import React, { useState } from 'react';
import styled from 'styled-components';
import { FaTrash, FaPen } from 'react-icons/fa';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import * as actions from '../../../../actions';

import ModifyButton from '../../../UI/Button/ModifyButon';
import Modal from '../../../UI/Modal/Modal';
import Heading from '../../../UI/Heading/Heading';
import Button from '../../../UI/Button/Button';
import Input from '../../../UI/Input/Input';
import Message from '../../../UI/Message/Message';
import * as Schema from '../../../../utils/Yup/Schema';

const ItemStyled = styled.div`
  width: 100%;
  height: 5rem;
  display: inline-block;
  background-color: var(--color-textBox);
  padding: 1rem;
  box-sizing: border-box;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  transition: all 0.2s;
  font-weight: 400;
  font-size: 1.6rem;
  color: var(--color-text);
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    filter: brightness(90%);
  }

  img {
    width: 3rem;
    cursor: pointer;
    padding: 0.2rem;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Span = styled.span`
  padding-left: 2rem;
  cursor: pointer;
`;

const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ListItem = ({
  id,
  children,
  isFinish,
  deleteTodo,
  errorDelete,
  loadingDelete,
  updateTodo,
  errorUpdate,
  loadingUpdate
}) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      {/* Editting Modal */}

      <Modal
        opened={isEditing}
        close={() => {
          setIsEditing(false);
        }}
      >
        <Heading size="h2" color="white">
          Editing
        </Heading>
        <Heading size="h4" color="white">
          Old: {children}
        </Heading>
        <Formik
          initialValues={{ todo: children }}
          validationSchema={Schema.todo}
          onSubmit={values => {
            updateTodo(id, values);
            setIsEditing(false);
          }}
        >
          <StyledForm>
            <Field name="todo" type="text" component={Input} />
            <Message error show={errorUpdate}>
              {errorUpdate}
            </Message>
            <Button
              color="success"
              margin
              type="submit"
              disabled={loadingUpdate}
              loading={loadingUpdate ? 'Updating...' : null}
            >
              Update
            </Button>
            <Button
              color="white"
              type="button"
              onClick={() => setIsEditing(false)}
            >
              Close
            </Button>
          </StyledForm>
        </Formik>
      </Modal>

      {/* Delete Modal */}
      <Modal
        opened={isDeleting}
        close={() => {
          setIsDeleting(false);
        }}
      >
        <Heading size="h2" color="white">
          Are your sure want to delete this items?
        </Heading>
        <Heading size="h4" color="white">
          {children}
        </Heading>
        <Message error show={errorDelete}>
          {errorDelete}
        </Message>
        <Button
          color="danger"
          margin
          disabled={loadingDelete}
          onClick={() => {
            deleteTodo(id);
            setIsDeleting(false);
          }}
          loading={loadingDelete ? 'Deleting...' : null}
        >
          Yes, delete
        </Button>
        <Button color="white" onClick={() => setIsDeleting(false)}>
          Close
        </Button>
      </Modal>

      <ItemStyled>
        <Container>
          <img
            onClick={() => updateTodo(id, { isFinish: !isFinish })}
            src={isFinish ? '/task_finished.svg' : '/task_unfinished.svg'}
            alt={isFinish ? 'Finish' : 'UnFinish'}
          ></img>
          <Span
            onClick={() => updateTodo(id, { isFinish: !isFinish })}
            style={
              isFinish
                ? {
                    textDecoration: 'line-through',
                    color: 'var(--color-text-lighter)'
                  }
                : null
            }
          >
            {children}
          </Span>
        </Container>

        <Container>
          <ModifyButton onClick={() => setIsEditing(true)}>
            <FaPen />
          </ModifyButton>
          <ModifyButton color="red" onClick={() => setIsDeleting(true)}>
            <FaTrash />
          </ModifyButton>
        </Container>
      </ItemStyled>
    </div>
  );
};

const mapStateToProps = ({ todos }) => ({
  errorDelete: todos.deleteTodo.error,
  loadingDelete: todos.deleteTodo.loading,
  errorUpdate: todos.error,
  loadingUpdate: todos.loading
});

const mapDispatchToProps = {
  deleteTodo: actions.deleteTodo,
  updateTodo: actions.updateTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
