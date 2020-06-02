import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositórios no Githubs</Title>

      <Form action="">
        <input placeholder="Digite aqui" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="#teste">
          <img
            src="https://avatars1.githubusercontent.com/u/52886299?s=460&u=2a16a94436c9292a41291a99b4ca6346657beb12&v=4"
            alt="Ivan"
          />

          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy sclable React e React Native forms</p>
          </div>

          <FiChevronRight />
        </a>

        {/* corta aqui brother */}

        <a href="#teste">
          <img
            src="https://avatars1.githubusercontent.com/u/52886299?s=460&u=2a16a94436c9292a41291a99b4ca6346657beb12&v=4"
            alt="Ivan"
          />

          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy sclable React e React Native forms</p>
          </div>

          <FiChevronRight />
        </a>
        <a href="#teste">
          <img
            src="https://avatars1.githubusercontent.com/u/52886299?s=460&u=2a16a94436c9292a41291a99b4ca6346657beb12&v=4"
            alt="Ivan"
          />

          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy sclable React e React Native forms</p>
          </div>

          <FiChevronRight />
        </a>
        <a href="#teste">
          <img
            src="https://avatars1.githubusercontent.com/u/52886299?s=460&u=2a16a94436c9292a41291a99b4ca6346657beb12&v=4"
            alt="Ivan"
          />

          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy sclable React e React Native forms</p>
          </div>

          <FiChevronRight />
        </a>
        <a href="#teste">
          <img
            src="https://avatars1.githubusercontent.com/u/52886299?s=460&u=2a16a94436c9292a41291a99b4ca6346657beb12&v=4"
            alt="Ivan"
          />

          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy sclable React e React Native forms</p>
          </div>

          <FiChevronRight />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
