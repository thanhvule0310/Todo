import React from 'react';
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Input from '../../../UI/Input/Input';
import AddButton from '../../../UI/Button/AddButton';
import * as actions from '../../../../actions';
import * as Schema from '../../../../utils/Yup/Schema';

const StyledForm = styled(Form)`
  display: flex;
`;

const AddTodo = ({ addTodo, loading, error }) => {
  return (
    <div style={{ paddingTop: '5rem' }}>
      <Formik
        initialValues={{ todo: '' }}
        validationSchema={Schema.todo}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          addTodo(values);
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
  error: todos.addTodo.error,
  loading: todos.addTodo.loading
});

const mapDispatchToProps = {
  addTodo: actions.addTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
