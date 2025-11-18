import { Hono } from "hono";
import type { Context } from "hono";
import { serveStatic } from 'hono/deno';


const app = new Hono();


app.use('/static/*', serveStatic({ root: './'}));



app.get("/", (c: Context) => {
  return c.text("Hello World! WIe geht es");
});



Deno.serve(app.fetch);
