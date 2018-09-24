import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
//import 'primereact/resources/themes/nova-light/theme.css';
//import 'primeicons/primeicons.css';
import {Card} from 'primereact/card';
import {Button} from 'primereact/button';
import {InputText} from "primereact/inputtext";

const stories = storiesOf('Pagination', module);

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button!!</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

  const header = <img alt="Card" src='showcase/resources/demo/images/usercard.png'/>;
  const footer =  <span>
                    <Button label="Save" icon="pi pi-check" style={{marginRight: '0.em'}}/>
                    <Button label="Cancel" icon="pi pi-times" className="p-button-secondary"/>
                  </span>

  storiesOf('Datalink', module)
  .add('RemoveDatalinkButton', () => (
    <div>
    </div>
  ))
  .add('Card', () => (
    <Card footer={footer} header={header}>
      Content
      <i class="pi pi-times"></i>
    </Card>
  )).add('File name field', () => (
    <div className="p-g-12 p-md-4">
        <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
                <i className="pi pi-file"></i>
            </span>
            <InputText placeholder="Filename" />
        </div>
    </div>
  )).add('.. field', () => (
    <div className="p-g-12 p-md-4">
        <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
                <i className="pi pi-file"></i>
            </span>
            <InputText placeholder="Filename" />
        </div>
    </div>
  )).add('Size in MB field', () => (
    <div className="p-g-12 p-md-4">
        <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
                <i className="pi pi-file"></i>
            </span>
            <InputText placeholder="Filename" />
        </div>
    </div>
  )).add('Path field', () => (
    <div className="p-g-12 p-md-4">
        <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
                <i className="pi pi-file"></i>
            </span>
            <InputText placeholder="Filename" />
        </div>
    </div>
  ));