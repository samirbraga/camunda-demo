import React, { useEffect, FormEvent } from 'react';
import { Form, Button, Input, Icon, Checkbox, Row, Col, Layout, Tooltip, Card } from 'antd';
import cx from 'classnames';
import * as ProcessApi from './services/process';
import * as UserApi from './services/user';
import './App.scss';
import { AxiosResponse } from 'axios';
import { useHistory, Switch, Route, Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;
const { Search } = Input;

const servicesList = [{
  name: "ATESTADO DE ANTECEDENTES CRIMINAIS",
  description: "Officia et cillum duis velit qui nisi officia. Cupidatat et quis ullamco dolor est consectetur excepteur officia excepteur ea irure. Pariatur quis anim voluptate proident. In qui esse occaecat nostrud duis. Amet reprehenderit Lorem cillum irure nisi."
}, {
  name: "LICENCIAMENTO ANUAL",
  description: "Officia et cillum duis velit qui nisi officia. Cupidatat et quis ullamco dolor est consectetur excepteur officia excepteur ea irure. Pariatur quis anim voluptate proident. In qui esse occaecat nostrud duis. Amet reprehenderit Lorem cillum irure nisi"
}, {
  name: "DOCUMENTO DE IDENTIDADE CIVIL",
  description: "Officia et cillum duis velit qui nisi officia. Cupidatat et quis ullamco dolor est consectetur excepteur officia excepteur ea irure. Pariatur quis anim voluptate proident. In qui esse occaecat nostrud duis. Amet reprehenderit Lorem cillum irure nisi"
}, {
  name: "CNH DEFINITIVA",
  description: "Officia et cillum duis velit qui nisi officia. Cupidatat et quis ullamco dolor est consectetur excepteur officia excepteur ea irure. Pariatur quis anim voluptate proident. In qui esse occaecat nostrud duis. Amet reprehenderit Lorem cillum irure nisi"
}, {
  name: "CARTEIRA DE MOTORISTA POPULAR",
  description: "Officia et cillum duis velit qui nisi officia. Cupidatat et quis ullamco dolor est consectetur excepteur officia excepteur ea irure. Pariatur quis anim voluptate proident. In qui esse occaecat nostrud duis. Amet reprehenderit Lorem cillum irure nisi"
}, {
  name: "CERTIDÃO (NADA CONSTA)",
  description: "Officia et cillum duis velit qui nisi officia. Cupidatat et quis ullamco dolor est consectetur excepteur officia excepteur ea irure. Pariatur quis anim voluptate proident. In qui esse occaecat nostrud duis. Amet reprehenderit Lorem cillum irure nisi"
}];

const LoginForm = () => {
  const history = useHistory();

  useEffect(() => {
    ProcessApi.startProcess()
    .then(({ data }: AxiosResponse<{ processInstanceId: string }>) => {
      localStorage.setItem('processInstanceId', data.processInstanceId);
    })
  }, []);

  function handleLogin(e: FormEvent) {
    e.preventDefault();

    UserApi.signIn()
    .then(({ data }) => {
      history.push('/');
    });
  }

  return (
    <>
      <h1>LOGIN</h1>
      <Form onSubmit={handleLogin} className="login-form">
        <Form.Item>
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Checkbox>Remember me</Checkbox>
          &nbsp;&nbsp;
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <br/>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          &nbsp;Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </>
  );
};

const HomeScreen = () => {
  return (
    <Layout>
      <Header className="home-header d-flex justify-content-between">
        <h1>AGENDE SEU SERVIÇO</h1>
        <Link to="/signin">
          <Button ghost>
            LOGIN
          </Button>
        </Link>
      </Header>
      <Content>
        <Row type='flex' justify='center'>
          <Col span={16}>
            <div className="my-2">
              <Form className="ms-search-form py-3" layout='inline'>
                <h2 className="h5 mb-2 d-block">Pesquise por serviços:</h2>
                <div className={cx("ms-search-form-fields mx-auto")}>
                    <Form.Item
                        wrapperCol={{ sm: 24 }}
                        style={{ width: "100%" }}
                    >
                        <Search
                            value={''}
                            size='large'
                        />
                    </Form.Item>
                </div>
                <div className="mt-3">
                  <Row type='flex' justify='center'>
                    {servicesList.map(service => (
                      <Col span={10}>
                        <div className="p-1">
                          <Card title={service.name} style={{ width: '100%' }}>
                            <p>{service.description}</p>
                          </Card>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Content>
      <Footer>

      </Footer>
    </Layout>
  );
};

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <HomeScreen />
        </Route>
        <Route exact path="/signin">
          <Row className="app-form-container" type="flex" justify="center" align="middle">
            <Col span={8}>
              <LoginForm />
            </Col>
          </Row>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
