import * as React from 'react';
import { EditText, EditTextarea, onSaveProps } from 'react-edit-text';

const onSaveTest = ({ name, value, previousValue }: onSaveProps) => {
    console.log(name + value + previousValue);
};

const onChangeTest = (value: string) => {
    console.log(value);
};

const formatDisplayTextTest = (value: string) => {
    return '$' + value;
};

<EditText />;
<EditText id="firstName" />;
<EditText name="firstName" />;
<EditText className="firstName" />;
<EditText value="firstName" />;
<EditText defaultValue="firstName" />;
<EditText value="firstName" onChange={onChangeTest} />;
<EditText type="email" placeholder="Enter your email" />;
<EditText type="email" name="email" />;
<EditText type="email" name="email" onSave={onSaveTest} />;
<EditText inline />;
<EditText style={{ margin: 0 }} />;
<EditText readonly />;
<EditText type="number" value="100" formatDisplayText={formatDisplayTextTest} />;

<EditTextarea />;
<EditTextarea id="desc" />;
<EditTextarea name="desc" />;
<EditTextarea className="desc" />;
<EditTextarea value="Description" />;
<EditTextarea defaultValue="Description" />;
<EditTextarea value="Description" onChange={onChangeTest} />;
<EditTextarea placeholder="Enter a description" />;
<EditTextarea name="desc" onSave={onSaveTest} />;
<EditTextarea rows={5} />;
<EditTextarea style={{ padding: 0 }} />;
<EditTextarea readonly />;
<EditTextarea value="100" formatDisplayText={formatDisplayTextTest} />;
