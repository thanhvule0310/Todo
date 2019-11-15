import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import ListItem from './ListItem/ListItem';
import Input from '../../UI/Input/Input';
import AddButton from '../../UI/Button/AddButton';

const Wrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 2 / 3;
  background-color: var(--color-white);
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 1.5rem 4rem var(--shadow);
  transition: all 0.2s;
  color: var(--color-text-lighter) !important;
  font-size: 2rem;
`;

const StyledForm = styled(Form)`
  display: flex;
`;

const todoSchema = Yup.object().shape({
  text: Yup.string()
    .required('Task name is required.')
    .min(6, 'Too short.')
    .max(100, 'Too long.')
});

export const ListItems = ({ todos }) => {
  return (
    <Wrapper>
      {todos.map(item => (
        <ListItem
          key={item._id}
          isFinish={item.isFinish}
          isImportance={item.isImportance}
        >
          {item.text}
        </ListItem>
      ))}
      <div style={{ paddingTop: '5rem' }}>
        <Formik
          initialValues={{ text: '' }}
          validationSchema={todoSchema}
          // onSubmit={}
        >
          {({ isSubmitting, isValid }) => (
            <StyledForm>
              <Field
                placeholder="Add task"
                name="text"
                type="text"
                component={Input}
              />
              <AddButton type="submit">+</AddButton>
            </StyledForm>
          )}
        </Formik>
      </div>
    </Wrapper>
  );
};

export default ListItems;
