# Barbara James Automated Input System

all items here will be input as "HOSA Student Volunteering" as the description, sorry about not having flexibility on that. If you want to change it, see line 105 in hosaauto1.js

## Instructions

1. Clone this repository
   1. Click the green "Clone or download" button and download the ZIP, or click [here](https://github.com/HyperKids/hosa-hours-autoinput/archive/master.zip). Extract the ZIP files into a folder somewhere.

1. [Download and install node.js](https://nodejs.org/en/download/)

1. Visit [https://developers.google.com/sheets/api/quickstart/nodejs](https://developers.google.com/sheets/api/quickstart/nodejs) and do Step 1. Ensure you download the client configuration and save the files as *client_secret.json*, **NOT** credentials.json

1. Move the client_secret.json into the same folder as the hosaauto1.js folder

1. Open Command Prompt (Windows) or Terminal (OS X) and navigate to the hosa-hours-autoinput-master folder you downloaded and extracted earlier
   1. Ensure you are in the same directory as the hosaauto1.js file. To change directories, type in "cd " followed by the directory it's stored in. For example, "cd C:\Users\HOSA\Desktop\hosa-bj-auto" would go to the hosa-bj-auto folder on the desktop.

1. In the Command Prompt (or Terminal), type "node hosaauto1.js"

1. Follow the directions as presented until it spits out an error and quits
   1. you should have authorized the application and pasted the code into the command window
   1. When you see the warning in browser, hit "Advanced" and "Continue"

1. Go to [this spreadsheet](https://docs.google.com/spreadsheets/d/1vKcwQ5HYQtlSV4YvX36JryJY7WQxIcT7RnZs_61KxBg/edit#gid=0)

1. Delete ALL data in columns A, B, D, and E

1. Put your data into column D in the following format: MM/DD/YYYY (ensure you put zeros in front so there are two characters for month and date)

1. Put the corresponding number of hours per date into column E

1. In the Command Prompt, execute "node hosaauto1.js"

1. It should spit out a ton of data in brackets. Leave the input there, you'll need it in a sec.

1. Log into your HOSA Barbara James account at [this link](https://apps.hosa.org/hosaconf/member-activity/action/MemberActivity.action?login=)

1. Press F12 (open developer console)
   1. if that doesn't work, try CMD+SHIFT+C and a ton of other combinations, whatever you can think of... or google it

1. Copy and paste the code from _webcode.txt into the web console and hit enter

1. In the web console, type "var data = "

1. Go back to the command prompt and copy the data starting with "[" and ending at "]" (highlight with left mouse button, copy by clicking right mouse button)

1. Paste the data into the web console after the = sign

1. Press enter

1. Type input(data)

1. Press enter

1. Give it a minute or so, then reload the page
1. Voila!


## Troubleshooting
1. if you're doing this and it's not working, delete "credentials.json"
1. contact me if you have my personal lines of contact

-Isaac Kim, Stockdale HOSA president 2018-19

## Legal
Copyright © 2017-2020 Isaac Kim. All rights reserved.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS IS” AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.