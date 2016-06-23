# mediawiki-with-react-redux
SPA with react, redux, mediawiki api and more

#Dataflow

Action  ->            Reducer                   ->     View
          (prev state, action) => (next state)      (Containers)
                  [UPDATE STATE TREE]


        Action
(store.dispatch(/*action*/))
           |
           \/


```flow
st=>start: Start
e=>end
op=>operation: My Operation
cond=>condition: Yes or No?

st->op->cond
cond(yes)->e
cond(no)->op
```