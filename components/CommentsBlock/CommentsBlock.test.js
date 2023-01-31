import { render, screen } from "@testing-library/react";
import { test, expect, describe } from "@jest/globals";
import Component from "../CommentsBlock/CommentsBlock";

describe("CommentsBlock renders on correct pages", () => {
  let currentPage = "";
  const props = {};

  test(`CommentsBlock renders on appropriate pages`, () => {
    render(<Component />);
    const actual = screen.getByTestId('CommentsBlock')
    expect(actual).toBeInTheDocument();
  });

	test(`CommentsBlock doesn't render on inappropriate pages`)
});

