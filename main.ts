// import { checkHealth } from "src/shared/health";

//  const healthCheck = checkHealth;
//  console.log("Test 1 Health check:", healthCheck()); 
    
import { buildServer } from "@infra/http/server";

const port = Number(process.env.PORT ?? 3000);
buildServer().then(app => app.listen({ port }));
