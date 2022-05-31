import classes from "../styles/About.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "../profile1.png";

const About = () => {
    return (
        <div>
            <Header/>
                    <div className={classes.area}>
                        <p className={classes.title}>About me</p>
                        <p className={classes.profile}>Profile</p>
                        <div className={classes.my_profile}>
                            <img className={classes.image} src={Image} alt="" />
                            <div className={classes.desc}>
                                名前: 根本 啓貴（ネモト ヒロキ）<p/>
                                生年月日: 2001年 1月19日<p/>
                                出身: 福島県 須賀川市<p/>
                                所属: 会津大学 コンピュータ理工学部 4年<p/>
                                趣味: バスケットボール, 筋トレ, ゲーム
                            </div>
                        </div>
                        <div className={classes.line}><hr /></div>
                        <div className={classes.skill}>Skills</div>
                        <div className={classes.my_skill}>
                            ・HTML<p/>
                            ・CSS<p/>
                            ・Javascript<p/>
                            ・React.js
                        </div>
                    <Footer />
                    </div>
        </div>
    );
};

export default About;