const{test,expect}  =require ("@playwright/test")

test("login to amazon" ,async function({page})

{
await page.goto("htts://www.amazon.com");
await page.locator("twotabsearchtextbox").click();

})
