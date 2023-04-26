# GitHub Modified Sample

{{TOC}}

## Usual markdown objects

### Text in paragraph

Here there is some text in *italic* and some in **bold** and link to my [personal page](https://experthobbyist.com/).
We can also add an image:

![Trek1](https://www.shareicon.net/data/48x48/2015/09/14/100885_star-trek_512x512.png).

And continue with some ==highlights== in the text, or if you want to correct something, you can ~~strikethrough~~ text.

### Horizontal Rule

---

### Lists

#### Bullet list

```
* List
* List
* List
- List
- List
- List
```

* List
* List
* List
- List
- List
- List

#### Ordered list

```
1. One
2. Two
3. Three
```

1. One
2. Two
3. Three

#### Tasks Lists

```
- [ ] Unfinished task list item
- [ ] Another unfinished task
- [x] Finished task list item
```

- [ ] Unfinished task list item
- [ ] Another unfinished task
- [x] Finished task list item

### BlockQuote

```
> Normal BlockQuote

and big one

> BlockQuote with some lots of text that could be written in this block and additional lines.
> You can continue in a new line and add also add formatting like **bold text** and *italics*.

and to quote a quote....

> This is the big quote
>> And quote inside a quote
```

> Normal BlockQuote

and big one

> BlockQuote with some lots of text that could be written in this block and additional lines.
> You can continue in a new line and add also add formatting like **bold text** and *italics*.

and to quote a quote....

> This is the big quote
>> And quote inside a quote

### Code Blocks

#### Without code highlighting


	```
	This is code block with standard format
	and it could be used, for example to represent an output from an execution in a command shell
	```


```
This is code block normal with standard format
and it could be used, for example to represent an output from an execution in a command shell
```

#### Code Syntax Highlighting

	```python
	#This one has "language-python" as mark up in the code block
	#and let's format it. (be aware of wrap lines!)
	import numpy as np
	import pandas as pd
	import matlplotlib.pyplot as plt
	df = pd.read("hola.csv",sep=";")
	root = np.sqrt(25)
	class sergiiatemplate:
	    super():
	        print("I'm python code")
	```

```python
import numpy as np
import pandas as pd
import matlplotlib.pyplot as plt
df = pd.read("hola.csv",sep=";")
root = np.sqrt(25)
class sergiiatemplate:
    super():
        print("I'm python code")
```

### Table

#### Normal Table

|Header |Column 1 | Column 2 | Column 3  | 
|:--- |:---- |:----:| ----:|
|1. Row| is | is | is  |
|2. Row| left | nicely | right  |
|3. Row| aligned | centered | aligned  | 

#### CSV Table

```
/example.csv
```

### LaTeX

```
An example of math inline ${e}^{i\pi }+1=0$
```

An example of math inline ${e}^{i\pi }+1=0$

To show an expression by itself:

```
$${x}_{1,2}=\frac{-b\pm \sqrt{{b}^{2}-4ac}}{2a}$$
```

$${x}_{1,2}=\frac{-b\pm \sqrt{{b}^{2}-4ac}}{2a}$$

## Customizations

Open template file with iA Writer and select the **GitHub Modified** template to view these. 

### Asides

```html
<tip>This is a tip!</tip>
```

<tip>This is a tip!</tip>

```html
<note>Make note of this.</note>
```

<note>Make note of this.</note>

```html
<important>Don't skip this step.</important>
```

<important>Don't skip this step.</important>

```html
<warning>This will break things.</warning>
```

<warning>This will break things.</warning>

```html
<caution>Here there be dragons.</caution>
```

<caution>Here there be dragons.</caution>

