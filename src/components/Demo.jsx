export default function Demo() {
  return (
    <div class="wrapper">
        <ul>
  <li>React Personal Portfolio</li>
</ul>

<p>This particular website was built with Jekyll ( A static website engine written with Ruby ) loaded with minimalist style template. I tried to create an exact same website with React. I inspected the html elements and css with by the Jekyll website and tried to mimic it. It is hosted on Vercel.</p>

<p><a href="https://personalwebsite-gamma-nine.vercel.app/">Link</a><br/>
 <a href="https://github.com/waimanlam2019/personalwebsite">Source</a></p>

<ul>
  <li>Browser Cache Deleter</li>
</ul>

<p>This tool was written to have external control deletion over browser cache when we don’t trust browser’s promise to delete cache after closing the browser. Adopted Strategy pattern to facilitate use with different browsers such as Google Chrome, Vivaldi and different platforms such as Windows and Mac because they store cache in different location.</p>

<p>I created this tool for my own use when I found need to reliably clear browser cache automatically (How could you trust the browser to do the job for you when it is important?), it got the job done and later I don’t need it anymore so development stopped right there.</p>

<p><a href="https://github.com/waimanlam2019/browser-cache-deleter/tree/master">Link</a></p>

<ul>
  <li>Anmeldung Bot (Germany address registration appointment finder)</li>
</ul>

<p>The tool was written to help a German to find address registration (German need to register their new address with government when they move to new address) appointment. I used Java + Selenium to automate the process of looking up the appointment on the website. If a good appointment slot is found, it would pop a dialog box to let me know.</p>

<p><a href="https://github.com/waimanlam2019/AnmeldungBot">Link</a></p>

<ul>
  <li>PDF file splitter demo with Java FX ( apply ForkJoinPool )</li>
</ul>

<p>A demo program I created with help of ChatGPT to demo ForkJoinPool concurrency. I demanded ChatGPT to create a tool to split a PDF file page by page with JavaFX UI + ForkJoinPool technique. The first version works and I proposed further improvement that its memory management can be improved by extracting the line which load the pdf into the memory from threads.</p>

<p><a href="https://github.com/waimanlam2019/pdfsplit-forkjoinpool">Link</a></p>

      </div>
  )
}