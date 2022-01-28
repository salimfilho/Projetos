import TitleBar from "components/TitleBar";
import Content from "components/Content";
import Card from "components/Card";
import CardTitle from "components/CardTitle";
import Upload from "components/Form/Upload";
import Input from "components/Form/LabelInput";
import BtnYellow from "components/Button/BtnYellow";
import Messages from "components/Messages";
import Spinner from "components/Spinner";
import CardBody from "components/CardBody";
import BtnBox from "components/Button/BtnBox";

const Component = (props) => {
  return (
    <>
      <TitleBar label="Meu Perfil" currentPage="" />
      <Content>
        <Card>
          <CardTitle title="Dados"></CardTitle>
          <Content>
            <CardBody>
              <form onSubmit={props.formik.handleSubmit}>
                <Messages
                  formMessages={props.messages.messages}
                  alert={props.messages.alert}
                />
                <Input name="name" label="Nome" formik={props.formik} />
                <Input
                  type="email"
                  name="email"
                  label="Email"
                  formik={props.formik}
                />
                <BtnBox>
                  <BtnYellow type="submit" disabled={props.formik.isSubmitting}>
                    {props.formik.isSubmitting ? <Spinner /> : "Enviar"}
                  </BtnYellow>
                </BtnBox>
              </form>
            </CardBody>
          </Content>
        </Card>

        <Card>
          <CardTitle title="Imagem"></CardTitle>
          <Content>
            <CardBody>
              <Upload
                onUpload={props.files}
                fileUrl={props.data.file_url}
                done={props.done}
                errors={props.errors}
                setErrors={props.setErrors}
              />
              <p>{props.messagesFile}</p>
            </CardBody>
          </Content>
        </Card>

        <Card>
          <CardTitle title="Mudar Senha"></CardTitle>
          <Content>
            <CardBody>
              <form onSubmit={props.formikPassword.handleSubmit}>
                <Messages
                  formMessages={props.messagesPassword.messages}
                  alert={props.messagesPassword.alert}
                />
                <Input
                  type="password"
                  name="current_password"
                  label="Senha atual"
                  formik={props.formikPassword}
                />
                <Input
                  type="password"
                  name="password"
                  label="Senha nova"
                  formik={props.formikPassword}
                />
                <Input
                  type="password"
                  name="password_confirmation"
                  label="Confirmar senha"
                  formik={props.formikPassword}
                />
                <BtnBox>
                  <BtnYellow type="submit" disabled={props.formik.isSubmitting}>
                    {props.formikPassword.isSubmitting ? <Spinner /> : "Enviar"}
                  </BtnYellow>
                </BtnBox>
              </form>
            </CardBody>
          </Content>
        </Card>
      </Content>
    </>
  );
};

export default Component;
