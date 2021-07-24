import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ButtonPresenter } from "./presenter";

export default {
  title: "components/attoms/Button",
  component: ButtonPresenter,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ButtonPresenter>;

const Template: ComponentStory<typeof ButtonPresenter> = (args) => (
  <ButtonPresenter {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
