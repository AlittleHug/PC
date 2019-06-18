<template>
    <!--<div class="login-wrap">-->
        <!--<div class="ms-login">-->
            <!--<div class="ms-title">后台管理系统</div>-->
            <!--<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="ms-content">-->
                <!--<el-form-item prop="username">-->
                    <!--<el-input v-model="ruleForm.userName" placeholder="username">-->
                        <!--<el-button slot="prepend" icon="el-icon-lx-people"></el-button>-->
                    <!--</el-input>-->
                <!--</el-form-item>-->
                <!--<el-form-item prop="password">-->
                    <!--<el-input type="password" placeholder="password" v-model="ruleForm.userPassword" @keyup.enter.native="submitForm('ruleForm')">-->
                        <!--<el-button slot="prepend" icon="el-icon-lx-lock"></el-button>-->
                    <!--</el-input>-->
                <!--</el-form-item>-->
                <!--<div class="login-btn">-->
                    <!--<el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>-->
                <!--</div>-->
                <!--<p class="login-tips">Tips : 用户名和密码随便填。</p>-->
            <!--</el-form>-->
        <!--</div>-->
    <!--</div>-->
    <div class="page-container">
        <div class="pageTop-container">
            <div class="pageTop-content">
                <div class="logo-space">
                    <a><img src="../../assets/img/logo.png" class="logo"/><span>众安保险 · 开放平台</span></a>
                </div>
                <div class="menu-space">
                    <ul class="menu">
                        <li>首页</li>
                        <li>众推广</li>
                        <li>场景合作</li>
                        <li>客户案例</li>
                        <li>技术接入</li>
                        <li>技术支持</li>
                    </ul>
                </div>
                <div class="user-space">
                    <ul class="user">
                        <li>商业平台</li>
                        <li>登录</li>
                        <li class = "login" style="padding: 3px 16px;border: .5px solid #fff;border-radius: 25px;display: inline;">立即注册</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="show-image"></div>
        <div class="show-number"></div>
        <div class="show-process"></div>
    </div>
</template>

<script>
    import axios from 'axios'
    import "../../assets/css/page/firstPage.css"
    export default {
        data: function(){
            return {
                ruleForm: {
                    userName: '',
                    userPassword: ''
                },
                rules: {
                    userName: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    userPassword: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                var baseUrl = '/api/login/loginRequest'
                axios.post(baseUrl,this.ruleForm).then(response => {
                    if (response.data.status === 200) {
                        localStorage.setItem('ms_username',this.ruleForm.userName);
                        this.$router.push('/');
                    } else {
                        this.$message({
                            type: 'error',
                            message: response.data.msg
                        })
                    }
                })
            }
        }
    }
</script>
