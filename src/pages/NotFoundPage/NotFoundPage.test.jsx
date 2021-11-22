import React from "react";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";

import NotFoundPage from "./NotFoundPage";
import { BrowserRouter } from "react-router-dom";

it("should navigate to error page is route wrong", () => {
    const history = createMemoryHistory();
    history.push("wrong-name");
    const { container } = render(
        <BrowserRouter history={history}>
            <NotFoundPage />
        </BrowserRouter>
    );
    expect(container.innerHTML).toMatch("Page Not Found");
});