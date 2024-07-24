import { Router } from "express";

import event from "./routes/event";

const router: Router = Router();

const routes: {
  [key: string]: (router: Router) => void;
} = {
  event,
};

for (const route in routes) {
  routes[route](router);
}

export { router };
