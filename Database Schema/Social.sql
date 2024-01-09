USE [master]
GO
/****** Object:  Database [KhanPostDB]    Script Date: 1/10/2024 2:18:16 AM ******/
CREATE DATABASE [KhanPostDB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'KhanPostDB', FILENAME = N'E:\SQL SERVER\MSSQL16.NODE_SERVER\MSSQL\DATA\KhanPostDB.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'KhanPostDB_log', FILENAME = N'E:\SQL SERVER\MSSQL16.NODE_SERVER\MSSQL\DATA\KhanPostDB_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [KhanPostDB] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [KhanPostDB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [KhanPostDB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [KhanPostDB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [KhanPostDB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [KhanPostDB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [KhanPostDB] SET ARITHABORT OFF 
GO
ALTER DATABASE [KhanPostDB] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [KhanPostDB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [KhanPostDB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [KhanPostDB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [KhanPostDB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [KhanPostDB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [KhanPostDB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [KhanPostDB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [KhanPostDB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [KhanPostDB] SET  DISABLE_BROKER 
GO
ALTER DATABASE [KhanPostDB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [KhanPostDB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [KhanPostDB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [KhanPostDB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [KhanPostDB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [KhanPostDB] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [KhanPostDB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [KhanPostDB] SET RECOVERY FULL 
GO
ALTER DATABASE [KhanPostDB] SET  MULTI_USER 
GO
ALTER DATABASE [KhanPostDB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [KhanPostDB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [KhanPostDB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [KhanPostDB] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [KhanPostDB] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [KhanPostDB] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'KhanPostDB', N'ON'
GO
ALTER DATABASE [KhanPostDB] SET QUERY_STORE = ON
GO
ALTER DATABASE [KhanPostDB] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [KhanPostDB]
GO
/****** Object:  Table [dbo].[Likes_Lookup]    Script Date: 1/10/2024 2:18:17 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Likes_Lookup](
	[post_id] [int] NOT NULL,
	[user_id] [int] NOT NULL,
	[like_dt] [datetime] NOT NULL,
 CONSTRAINT [PK_Likes_Lookup] PRIMARY KEY CLUSTERED 
(
	[post_id] ASC,
	[user_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[M_Roles]    Script Date: 1/10/2024 2:18:17 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[M_Roles](
	[role_id] [int] NOT NULL,
	[role] [varchar](20) NOT NULL,
 CONSTRAINT [PK_M_Roles] PRIMARY KEY CLUSTERED 
(
	[role_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Post_Lookup]    Script Date: 1/10/2024 2:18:17 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Post_Lookup](
	[post_id] [int] IDENTITY(1,1) NOT NULL,
	[user_id] [int] NOT NULL,
	[content] [text] NOT NULL,
	[image_path] [nvarchar](100) NULL,
	[post_time] [datetime] NULL,
	[like_count] [int] NULL,
 CONSTRAINT [PK__Post_Loo__3ED787661FFF37B3] PRIMARY KEY CLUSTERED 
(
	[post_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[sessions]    Script Date: 1/10/2024 2:18:17 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[sessions](
	[sid] [nvarchar](255) NOT NULL,
	[session] [nvarchar](max) NOT NULL,
	[expires] [datetime] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[sid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User_SSO]    Script Date: 1/10/2024 2:18:17 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User_SSO](
	[user_id] [int] IDENTITY(1,1) NOT NULL,
	[username] [nvarchar](50) NOT NULL,
	[password] [nvarchar](100) NOT NULL,
	[rold_id] [int] NOT NULL,
	[created_on] [datetime] NULL,
	[updated_on] [datetime] NULL,
	[profile_pic_path] [nvarchar](50) NULL,
 CONSTRAINT [PK_User_SSO] PRIMARY KEY CLUSTERED 
(
	[user_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [UNIQUE_username] UNIQUE NONCLUSTERED 
(
	[username] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Likes_Lookup] ADD  CONSTRAINT [DF_Likes_Lookup_like_dt]  DEFAULT (getutcdate()) FOR [like_dt]
GO
ALTER TABLE [dbo].[Post_Lookup] ADD  CONSTRAINT [DF__Post_Look__post___5441852A]  DEFAULT (getutcdate()) FOR [post_time]
GO
ALTER TABLE [dbo].[Post_Lookup] ADD  CONSTRAINT [DF_Post_Lookup_like_count]  DEFAULT ((0)) FOR [like_count]
GO
ALTER TABLE [dbo].[User_SSO] ADD  CONSTRAINT [DF_User_SSO_rold_id]  DEFAULT ((2)) FOR [rold_id]
GO
ALTER TABLE [dbo].[Likes_Lookup]  WITH CHECK ADD  CONSTRAINT [FK_Likes_Lookup_Post] FOREIGN KEY([post_id])
REFERENCES [dbo].[Post_Lookup] ([post_id])
GO
ALTER TABLE [dbo].[Likes_Lookup] CHECK CONSTRAINT [FK_Likes_Lookup_Post]
GO
ALTER TABLE [dbo].[Post_Lookup]  WITH CHECK ADD  CONSTRAINT [FK_Post_User] FOREIGN KEY([user_id])
REFERENCES [dbo].[User_SSO] ([user_id])
GO
ALTER TABLE [dbo].[Post_Lookup] CHECK CONSTRAINT [FK_Post_User]
GO
ALTER TABLE [dbo].[User_SSO]  WITH CHECK ADD  CONSTRAINT [FK_Role_User_SSO] FOREIGN KEY([rold_id])
REFERENCES [dbo].[M_Roles] ([role_id])
GO
ALTER TABLE [dbo].[User_SSO] CHECK CONSTRAINT [FK_Role_User_SSO]
GO
/****** Object:  StoredProcedure [dbo].[USP_Authenticate_USER]    Script Date: 1/10/2024 2:18:17 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Mubasshir Khan
-- Create date: 06/01/2024
-- Description:	Authenticate User

CREATE   PROCEDURE [dbo].[USP_Authenticate_USER] 
@username nvarchar(50)='mubasshir',
@pass nvarchar(100) output,
@uid int output
AS

BEGIN
    SET NOCOUNT ON;
	SELECT @pass=[password],@uid=[user_id] from User_SSO where username=@username;
	RETURN;
END;

GO
/****** Object:  StoredProcedure [dbo].[USP_Delete_Post]    Script Date: 1/10/2024 2:18:17 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Mubasshir Khan
-- Create date: 08/01/2024
-- Description:	Delete Posts using post_id and user_id 
-- =============================================
CREATE     PROCEDURE [dbo].[USP_Delete_Post]
@uid int=1,--user_id
@pid int,--post_id
@isDeleted bit output
AS
BEGIN
	DELETE FROM Post_Lookup
	WHERE [user_id]=@uid and post_id=@pid
	
	SELECT @isDeleted=@@ROWCOUNT
END;
GO
/****** Object:  StoredProcedure [dbo].[USP_Get_PostByID]    Script Date: 1/10/2024 2:18:17 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Mubasshir Khan
-- Create date: 08/01/2024
-- Description:	Get Posts By UserID 
-- =============================================
CREATE   PROCEDURE [dbo].[USP_Get_PostByID] 
@u_id int=1
AS
BEGIN
    SET NOCOUNT ON;
    Select post_id 
	,US.[username] [User]
	,content[Content]
	,image_path[IMG]
	,PL.post_time [PostTime]
	,like_count [Like] 
	FROM Post_Lookup PL
	JOIN User_SSO US ON US.[user_id]=PL.[user_id]
	where US.[user_id]=@u_id
	order by [post_time] desc;
END;
GO
/****** Object:  StoredProcedure [dbo].[USP_Get_Posts]    Script Date: 1/10/2024 2:18:17 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Mubasshir Khan
-- Create date: 10/01/2024
-- Description:	Get All the public post 
-- =============================================
CREATE     PROCEDURE [dbo].[USP_Get_Posts] 
AS
BEGIN
    SET NOCOUNT ON;
    Select post_id 
	,PL.[user_id]  
	,US.[username] [User]
	,content[Content]
	,image_path[IMG]
	,PL.post_time [PostTime]
	,like_count [Like] 
	FROM Post_Lookup PL
	JOIN User_SSO US ON US.[user_id]=PL.[user_id]
	order by [post_time] desc;
END;
GO
/****** Object:  StoredProcedure [dbo].[USP_GET_Users]    Script Date: 1/10/2024 2:18:17 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Mubasshir Khan
-- Create date: 06/01/2024
-- Description:	Fetch All the User
-- =============================================
CREATE PROCEDURE [dbo].[USP_GET_Users] 
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from 
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	SELECT username [UserName],[role][Role],US.created_on[EntryDateTime] FROM User_SSO US
	JOIN M_Roles MR ON US.rold_id=MR.role_id
END
GO
/****** Object:  StoredProcedure [dbo].[USP_Save_Post]    Script Date: 1/10/2024 2:18:17 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Mubasshir Khan
-- Create date: 08/01/2024
-- Description:	Save user post 
-- =============================================
Create   PROCEDURE [dbo].[USP_Save_Post] 
@u_id nvarchar(50),
@content TEXT,
@image_path nvarchar(50),
@isSaved bit output
AS
BEGIN
    SET NOCOUNT ON;

    BEGIN TRY
        INSERT INTO Post_Lookup([user_id],[content],[image_path])
        VALUES (@u_id,@content,@image_path);
		SELECT @isSaved=1;
    END TRY
    BEGIN CATCH
            -- Handle other types of errors if needed
            SELECT @isSaved=0;
    END CATCH;
END;
GO
/****** Object:  StoredProcedure [dbo].[USP_Save_Post_Like]    Script Date: 1/10/2024 2:18:17 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Mubasshir Khan
-- Create date: 10/01/2024
-- Description: Save likes on post 
-- =============================================
CREATE     PROCEDURE [dbo].[USP_Save_Post_Like] 
@uid int ,
@pid int,
@isLiked bit output
AS
BEGIN
	BEGIN TRY
		BEGIN TRANSACTION
			INSERT INTO KhanPostDB.dbo.Likes_Lookup
			(post_id,[user_id])
			SELECT @pid ,@uid
			UPDATE Post_Lookup SET like_count=like_count+1
			WHERE  post_id=@pid
			SELECT @isLiked=@@ROWCOUNT
		COMMIT TRANSACTION
	END TRY
	BEGIN CATCH
		IF XACT_STATE()!=0 ROLLBACK 
	END CATCH
END;
GO
/****** Object:  StoredProcedure [dbo].[USP_Save_User]    Script Date: 1/10/2024 2:18:17 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Mubasshir Khan
-- Create date: 06/01/2024
-- Description:	Save new Users to the database
-- =============================================
CREATE PROCEDURE [dbo].[USP_Save_User] 
@username nvarchar(50),
@pass nvarchar(100)
AS
BEGIN
    SET NOCOUNT ON;

    BEGIN TRY
        INSERT INTO User_SSO (username, [password], created_on)
        VALUES (@username, @pass, GETDATE());
		SELECT @@ROWCOUNT [status],'success' [message]
    END TRY
    BEGIN CATCH
        IF ERROR_NUMBER() = 2627  -- Unique constraint violation error number
        BEGIN
            SELECT @@ROWCOUNT [status],'user already exist' [message] 
        END
        ELSE
        BEGIN
            -- Handle other types of errors if needed
            SELECT -1 [status],ERROR_MESSAGE()[Message];
        END
    END CATCH;
END;
GO
USE [master]
GO
ALTER DATABASE [KhanPostDB] SET  READ_WRITE 
GO
