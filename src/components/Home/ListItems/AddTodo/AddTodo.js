import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Input from '../../../UI/Input/Input';
import AddButton from '../../../UI/Button/AddButton';
import * as actions from '../../../../actions';

const StyledForm = styled(Form)`
  display: flex;
`;

const todoSchema = Yup.object().shape({
  todo: Yup.string()
    .required('Task name is required.')
    .min(6, 'Too short.')
    .max(100, 'Too long.')
});

const AddTodo = ({ addTodo, loading, error }) => {
  return (
    <div style={{ paddingTop: '5rem' }}>
      <Formik
        initialValues={{ todo: '' }}
        validationSchema={todoSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          await addTodo(values);
          setSubmitting(false);
          resetForm({});
        }}
      >
        {({ isSubmitting, isValid }) => (
          <StyledForm>
            <Field
              placeholder="Add task"
              name="todo"
              type="text"
              component={Input}
            />
            <AddButton
              disabled={loading}
              loading={loading ? '~' : null}
              type="submit"
            >
              +
            </AddButton>
          </StyledForm>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = ({ todos }) => ({
  error: todos.error,
  loading: todos.loading
});

const mapDispatchToProps = {
  addTodo: actions.addTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
