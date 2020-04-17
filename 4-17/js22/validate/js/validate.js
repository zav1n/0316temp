      // button能提交表单吗? button.submit
      // 要求 用户名是 6-16位
      // 要求 密码是10-18位
      // 要求 手机是一个11位数字
      // 要求 邮箱是一个邮箱
      // 点击验证的时候 会验证整个表单
      // 键盘输入内容的时候 也要验证该文本框

      let form = document.querySelector("#formDiv");
      let aInput = document.querySelectorAll("#formDiv input")
      let oSubmitBtn = document.querySelector("#submitDiv #btn")
      let regex = {
        username: {
          type: /^\w{6,16}$/
        },
        pwd: {
          type: /^\w{10,18}$/
        },
        phone: {
          type: /^\d{11}$/
        },
        email: {
          type: /^\w+@\w+([.]\w{2,4}){1,2}$/
        }
      }
      init()

      function init() {
        //1.点击按钮的时候 验证表单
        oSubmitBtn.addEventListener("click", function () {
          validateForm()
        })

        //2.为所有的文本框 绑定一个输入事件
        for (let i = 0; i < aInput.length; i++) {
          aInput[i].addEventListener("input", function () {
            validateInput(this)
          })
          //3.失去某个文本框焦点的时候 也想要验证文本框
          aInput[i].addEventListener("blur", function () {
            validateInput(this)
          })
        }
      }

      function validateForm() {
        for (let i = 0; i < aInput.length; i++) {
          validateInput(aInput[i])
        }
      }

      function validateInput(input) {
        //根据该文本框的id 和 regex对象 来找到对应的 验证规则
        let reg = regex[input.getAttribute("id")].type;
        //该文本此时的文本内容
        let str = input.value;
        //该文本框的父元素
        let parent = input.parentElement;

        let resultDiv = createResultDiv(parent)
        //验证该文本框满足不满足规则
        if (reg.test(str)) {
          showSuccessMessage(resultDiv)
        } else {
          showErrorMessage(resultDiv)
        }
      }

      function createResultDiv(parent) {
        //遍历所有的元素
        for (let i = 0; i < parent.children.length; i++) {
          //查找这个div中有没有结果div
          if (parent.children[i].classList.contains("validate-result")) {
            //就直接return 不需要重新创建
            return parent.children[i]
          }
        }
        //这是一个结果的div
        let resultDiv = document.createElement("div");
        resultDiv.classList.add("validate-result")
        parent.appendChild(resultDiv)
        return resultDiv
      }

      function showSuccessMessage(ele) {
        ele.classList.add("validate-success")
        ele.classList.remove("validate-error")
        ele.innerHTML = "成功"
      }

      function showErrorMessage(ele) {
        ele.classList.add("validate-error")
        ele.classList.remove("validate-success")
        ele.innerHTML = "失败"
      }